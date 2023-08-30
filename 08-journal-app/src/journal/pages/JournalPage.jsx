import { IconButton, Typography } from "@mui/material";
import { AddOutlined, MailOutlined } from "@mui/icons-material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Non pariatur elit do labore aute cillum aute quis. Cupidatat ex id anim
        id nulla nisi aliqua est. Adipisicing elit ex sint laboris commodo
        veniam aliquip ea et occaecat mollit enim voluptate commodo.
        Reprehenderit ea ut nostrud consectetur. Tempor deserunt duis officia
        Lorem occaecat et nisi quis sint.{" "}
      </Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
