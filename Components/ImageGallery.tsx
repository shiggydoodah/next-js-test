import { useState } from 'react';
import Modal from '@mui/material/Modal';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';

interface IImageData {
  url: string;
  alt: string;
}

interface ImageVaultProps {
  images: IImage[];
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ImageGallery = (props: ImageVaultProps) => {
  const [open, setOpen] = useState<IImageData | false>(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <ImageList sx={{ width: 600 }} cols={3}>
          {props.images.map((img) => (
            <ImageListItem key={img.id} onClick={() => setOpen({ url: img.url, alt: img.title })}>
              <img
                src={`${img.thumbnailUrl}`}
                alt={img.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <Modal
        open={open !== false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            open !== false && (
              <img
                src={open.url}
                alt={open.alt}
                loading="lazy"
              />
            )
          }
        </Box>
      </Modal>
    </>
  );
}


export default ImageGallery
