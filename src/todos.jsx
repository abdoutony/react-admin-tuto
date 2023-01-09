import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, useRecordContext } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
export const PostIcon = BookIcon;

export const TodoList = () => (
   <>
    <h1>Todos</h1>
    <List>
        
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="completed" />
            <EditButton />
        </Datagrid>
    </List>
   </>
);

const TodoTitle = () => {
    const record = useRecordContext();
    return <span>Post { record ? `"${record.title}"` : '' }</span>;
};

export const TodoEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="teaser" options={{ multiline: true }} />
            <TextInput multiline source="body" />
            <DateInput label="Publication date" source="published_at" />
            <TextInput source="average_note" />
            <TextInput disabled label="Nb views" source="views" />
        </SimpleForm>
    </Edit>
);

export const TodoCreate = () => (
    <Create title="Create a Post">
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="teaser" options={{ multiline: true }} />
            <TextInput multiline source="body" />
            <TextInput label="Publication date" source="published_at" />
            <TextInput source="average_note" />
        </SimpleForm>
    </Create>
);