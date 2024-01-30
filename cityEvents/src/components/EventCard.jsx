import PropTypes from "prop-types";

import {
  Card,
  Image,
  Title,
  Text,
  Container,
  Button,
  Group,
  useMantineTheme,
} from '@mantine/core';
import CommentsModule from "./EventComments";
import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();


export const EventCard = ({ event }) => {
  const { _id, title, organiser, date, location, price, description, image } =
  event;
  
  const theme = useMantineTheme();
    const cardStyles = {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.dark[5],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    };

  return (
    <Card style= {cardStyles} color={theme.colors.dark[4]} sshadow="sm" padding="lg" radius="md" withBorder width='500'>
      <Card.Section>
        <Image
          src="https://picsum.photos/300"
          alt={title}
          // height={160}
          width={250}
        />
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">

        <Text order={2}>{title}</Text>
        <Text>{date}</Text>
        <Text>{price}</Text>
      </Group>
      <Container padding={2}>
        <Group spacing={2} style={{ marginY: 2 }}>
          <Text>{location}</Text>
          <Text>{organiser}</Text>
        </Group>
        <Text>{description}</Text>
      </Container>
      <Container padding={2}>
        <Group position="apart">
          <Button size="sm">  Edit </Button>
          <Button size="sm"> Delete </Button>
        </Group>
      </Container>
      <CommentsModule eventId={_id} />
    </Card>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    organiser: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired, // Change to PropTypes.string
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};


export default EventCard;
