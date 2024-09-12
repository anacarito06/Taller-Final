import React from 'react'
import { Modal } from "@mui/material"
import { Box } from "@mui/material"
import Button from '@mui/material/Button';
import {Typography} from '@mui/material';
import {useEffect, useState} from 'react'
import { getRickAndMorty } from '../servicios/rickandmortyService';



function CharacterDetail({characterId}) {
    const [character, setCharacter] = useState(null)

    console.log(characterId)

    const apiURL = 'https://rickandmortyapi.com/api/character';
    
    useEffect(() => {
        async function fetchData() {
            let response = await getRickAndMorty({url: apiURL + "/" + characterId});
            setCharacter(response);
        }
        fetchData();
    }, [characterId])
    

    return (
        <div>
            {
                character && (
                    <div>
                        <Typography variant="h4">{character.name}</Typography>
                        <img src={character.image} alt={character.name} />
                        <Typography variant="body1">Status: {character.status}</Typography>
                        <Typography variant="body1">Species: {character.species}</Typography>
                        <Typography variant="body1">Gender: {character.gender}</Typography>
                        <Typography variant="body1">Origin: {character.origin.name}</Typography>
                        <Typography variant="body1">Location: {character.location.name}</Typography>

                    </div>
                )
            }
        </div>
    )
}

export {
    CharacterDetail
}

function Modal2 ({ children, status, handleClose }) {
    return (
        <Modal
            open={status}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                {children}
            </Box>
        </Modal>
    )
}
export {  Modal2
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }





