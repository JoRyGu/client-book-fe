import React, {useState} from 'react';
import {Container, TextField, Button, useMediaQuery} from "@material-ui/core";
import {PersonAddOutlined} from '@material-ui/icons';

import ClientCard from './ClientCard';
import styles from './styles';
import useClientSearch from "../../../hooks/useClientSearch";
import NewClientDialogue from "../newClient/NewClientDialogue";
import useTheme from "@material-ui/core/styles/useTheme";

const Clients = () => {
  const css = styles();
  const theme = useTheme();
  const fullscreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [search, foundClients, handleSearchChange] = useClientSearch();
  const [newClientOpen, setNewClientOpen] = useState(false);

  const handleNewClientClickOpen = () => {
    setNewClientOpen(true);
  };

  const handleNewClientClose = () => {
    setNewClientOpen(false);
  };

  return (
    <Container>
      <h1 className={css.header}>Clients</h1>
      <div className={css.searchContainer}>
        <TextField type="text"
                   name="search"
                   value={search}
                   onChange={handleSearchChange}
                   fullWidth
                   label="Search Clients"
                   className={css.search}
        />
        <Button variant="contained" color="secondary" className={css.addClientButton} onClick={handleNewClientClickOpen}>
          <PersonAddOutlined className={css.buttonIcon}/>
          New Client
        </Button>
        <NewClientDialogue open={newClientOpen} handleClose={handleNewClientClose} fullscreen={fullscreen} />
      </div>
      <div className={css.container}>
        {
          foundClients.length > 0 &&
          foundClients.map(client =>
            <ClientCard
              key={client.id}
              name={client.name}
              email={client.email}
              phoneNumber={client.phoneNumber}
            />
          )
        }
      </div>
    </Container>
  );
};

export default Clients;
