import React from 'react';
import {Card, CardHeader, CardContent, Avatar, Typography} from "@material-ui/core";

import styles from './styles';

const ClientCard = ({name, email, phoneNumber}) => {
  const css = styles();

  return (
    <Card className={css.card}>
      <CardHeader
        avatar={
          <Avatar className={css.avatar}>
            {name[0]}
          </Avatar>
        }
        title={name}
        className={css.cardHeader}
        titleTypographyProps={{ variant: 'h6'}}
      />
      <CardContent className={css.cardBody}>
        <Typography variant="subtitle1">
          Phone Number:
        </Typography>
        <Typography variant="caption">
          {`(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6)}`}
        </Typography>
        <Typography variant="subtitle1">
          Email Address:
        </Typography>
        <Typography variant="caption">
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClientCard;
