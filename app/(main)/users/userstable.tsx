"use client";

import { Pagination, Table } from "@heroui/react";
import { useMemo, useState } from "react";

const usersList = [
    {
        name: "Miguel Zapata Herrero",
        document: 1234657890,
        email: "correomuylargo@examplelargo.com"
    },
    {
        name: "Miguel Zapata Herrero",
        document: 1234657890,
        email: "correomuylargo@examplelargo.com"
    },
    {
        name: "Miguel Zapata Herrero",
        document: 1234657890,
        email: "correomuylargo@examplelargo.com"
    },
    {
        name: "Miguel Zapata Herrero",
        document: 1234657890,
        email: "correomuylargo@examplelargo.com"
    },
    {
        name: "Miguel Zapata Herrero",
        document: 1234657890,
        email: "correomuylargo@examplelargo.com"
    },
    {
        name: "Miguel Zapata Herrero",
        document: 1234657890,
        email: "correomuylargo@examplelargo.com"
    },
    {
        name: "Miguel Zapata Herrero",
        document: 1234657890,
        email: "correomuylargo@examplelargo.com"
    },
    {
        name: "Miguel Zapata Herrero",
        document: 1234657890,
        email: "correomuylargo@examplelargo.com"
    },
    {
        name: "Miguel Zapata Herrero",
        document: 1234657890,
        email: "correomuylargo@examplelargo.com"
    },
    {
        name: "Miguel Zapata Herrero",
        document: 1234657890,
        email: "correomuylargo@examplelargo.com"
    },
    {
        name: "Miguel Zapata Herrero",
        document: 1234657890,
        email: "correomuylargo@examplelargo.com"
    },
]

const ROWS_PER_PAGE = 10;

export function UsersTable() {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(usersList.length / ROWS_PER_PAGE);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const paginatedItems = useMemo(() => {
        const start = (page - 1) * ROWS_PER_PAGE;
        return usersList.slice(start, start + ROWS_PER_PAGE);
    }, [page]);
    const start = (page - 1) * ROWS_PER_PAGE + 1;
    const end = Math.min(page * ROWS_PER_PAGE, usersList.length);
    return (
        <Table>
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-[600px]">
                    <Table.Header>
                        <Table.Column isRowHeader>Nombre</Table.Column>
                        <Table.Column>Documento</Table.Column>
                        <Table.Column>Correo</Table.Column>
                        <Table.Column>Acciones</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {paginatedItems.map(user =>
                            <Table.Row>
                                <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>{user.document}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>
                                    <div className="grid grid-cols-2 grid-gap-1">
                                        <a rel="stylesheet" href={`/users/edit/${user.document}`}>
                                        <img src="/edit-icon.svg" alt="" />
                                        </a>
                                        <img src="/trash-icon.svg" alt="" />
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
            <Table.Footer>
                <Pagination size="sm">
                    <Pagination.Summary>
                        Pagina {start} a {end} de {usersList.length} resultados
                    </Pagination.Summary>
                    <Pagination.Content>
                        <Pagination.Item>
                            <Pagination.Previous
                                isDisabled={page === 1}
                                onPress={() => setPage((p) => Math.max(1, p - 1))}
                            >
                                <Pagination.PreviousIcon />
                                Prev
                            </Pagination.Previous>
                        </Pagination.Item>
                        {pages.map((p) => (
                            <Pagination.Item key={p}>
                                <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
                                    {p}
                                </Pagination.Link>
                            </Pagination.Item>
                        ))}
                        <Pagination.Item>
                            <Pagination.Next
                                isDisabled={page === totalPages}
                                onPress={() => setPage((p) => Math.min(totalPages, p + 1))}
                            >
                                Next
                                <Pagination.NextIcon />
                            </Pagination.Next>
                        </Pagination.Item>
                    </Pagination.Content>
                </Pagination>
            </Table.Footer>
        </Table>
    );
}