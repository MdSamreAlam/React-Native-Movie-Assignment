import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />

export const CardImage = () => {
    return (
        <Card>
            <Card.Title title="Card Title" left={LeftContent} />

            <Card.Cover
                source={{ uri: "https://m.media-amazon.com/images/M/MV5BYmJmNzU0NTgtOGM5Ni00MWJiLTgwZmMtNDIyNjYzZDAzNzI5XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg" }}
                style={{ width: '100%', height: '200' }} />
            <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
            </Card.Content>
        </Card>
    )
}