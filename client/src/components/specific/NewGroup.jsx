import React, { memo, useState } from "react";
import {
  Dialog,
  Stack,
  DialogTitle,
  ListItem,
  Button,
  Avatar,
  Typography,
  TextField,
} from "@mui/material";
import { sampleUsers } from "../../constant/sampleData";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";
const NewGroup = () => {
  const groupName = useInputValidation("");
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const selectMemberHandler = (id) => {
    setMembers((prev) =>
      prev.map((user) =>
        user._id === id ? { ...user, isAdded: !user.isAdded } : user
      )
    );
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };
  const submitHandler = () => {};
  const closeHandler=()=>{};
  return (
    <Dialog open onClose={closeHandler}>
      <Stack px={{ xs: "1rem", sm: "3rem" }} width={"29rem"} spacing={"2rem"}>
        <DialogTitle>New Group</DialogTitle>
        <TextField
          value={groupName.value}
          onChange={groupName.changeHandler}
          label="Group Name"
        />
        <Typography variant="body1">Memebers</Typography>
        <Stack>
          {members.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(i._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error" size="large">
            Cancel
          </Button>
          <Button variant="contained" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
