import React, { useState } from "react";
import {
  Dialog,
  Stack,
  DialogTitle,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constant/sampleData";


const Search = () => {
const [users,setUsers]=useState(sampleUsers);
  const search = useInputValidation("");
  const addFriendHanlder=(id)=>{
    console.log(id)
  }
  const isLoadingSendFriendRequest=false;
  
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputLabelProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((i) => (
            <ListItem>
              <UserItem user={i} key={i.id} 
              handler={addFriendHanlder}
               handlerIsLoading={isLoadingSendFriendRequest}
              />
            </ListItem>
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
