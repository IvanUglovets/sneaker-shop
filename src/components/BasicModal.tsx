import React, { FC } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Form from "./Form";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IPropsBasicModal {
  open: boolean;
  handleClose: () => void;
}

const BasicModal: FC<IPropsBasicModal> = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Оформление Заказа</DialogTitle>
      <DialogContent>
        <Form handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default BasicModal;
