//Player.js
import React, { useCallback, useState } from "react";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import ScrollDialog from "../../dialog";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePlayer, updatePlayer } from "../../../actions/players";
import PlayerForm from "../../Admin/Player/PlayerForm";
import { useAuth } from "../../Auth/AuthContext";

import useStyles from "./styles";

/**
 * Player component displays the details of a single player,
 * including the player's name, club, and images, as well as
 * functionality for updating and deleting the player.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.player - The player object containing player details.
 * @returns {JSX.Element} The rendered Player component.
 */
const Player = ({ player }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const classes = useStyles();
  const { isAuthenticated } = useAuth();

  const [openDialog, setOpenDialog] = useState(false);
  const [openUpdatePlayer, setOpenUpdatePlayer] = useState(false);

  const handleOpenUpdatePlayer = useCallback(() => {
    setOpenUpdatePlayer(true);
  }, []);

  const handleCloseUpdatePlayer = useCallback(() => {
    setOpenUpdatePlayer(false);
  }, []);

  const handleOpenDialog = useCallback(() => {
    setOpenDialog(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const handleDeletePlayer = useCallback(() => {
    dispatch(deletePlayer(player._id));
    setOpenDialog(false);
  }, [dispatch, player._id]);

  const openPlayer = useCallback(() => {
    history(`/players/${player._id}`, { redirect: true });
  }, [history, player._id]);

  const handleSubmit = useCallback(
    (updatedPlayerData) => {
      const data = new FormData();

      data.append("name", updatedPlayerData.name);
      data.append("club", updatedPlayerData.club);
      data.append("infoEnglish", updatedPlayerData.infoEnglish);
      data.append("infoNorwegian", updatedPlayerData.infoNorwegian);
      data.append("categories", JSON.stringify(updatedPlayerData.category));

      updatedPlayerData.images.forEach((image) => {
        data.append("images", image);
      });

      dispatch(updatePlayer(player._id, data));
    },
    [dispatch, player._id]
  );

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        className={classes.cardAction}
        onClick={openPlayer}
      >
        <CardMedia
          className={classes.media}
          image={player.images[0]}
          title={player.name}
        />

        <div className={classes.overlay}>
          <Typography variant="h6">{player.club}</Typography>
        </div>
        <Typography
          className={classes.name}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {player.name}
        </Typography>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <ScrollDialog
          title="Update Player"
          open={openUpdatePlayer}
          onClose={handleCloseUpdatePlayer}
        >
          <PlayerForm
            player={player}
            handleSubmit={handleSubmit}
            handleCloseUpdatePlayer={handleCloseUpdatePlayer}
          />
        </ScrollDialog>
        {isAuthenticated && (
          <>
            <Button
              size="small"
              color="primary"
              onClick={handleOpenUpdatePlayer}
            >
              <UpdateIcon fontSize="small" /> &nbsp; Update
            </Button>
            <Button size="small" color="secondary" onClick={handleOpenDialog}>
              <DeleteIcon fontSize="small" /> &nbsp; Delete
            </Button>
          </>
        )}
      </CardActions>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete {player.name}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeletePlayer} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default Player;
