import React from "react";
import {AppBar, Stack, TextInput, ListItem , IconButton} from "@react-native-material/core";
import { AntDesign, Octicons, Ionicons} from '@expo/vector-icons';


const App = () => (
  
  <>
   <AppBar
    color="white"
    title="Contact"
    tintColor= "black"
  
    centerTitle={true}
    trailing={props => (
      <IconButton
        icon={props => <Ionicons name="add" size={24} color="#1b197a"  {...props} />}
        {...props}
      />
    )}
  />
 <Stack spacing={2} style={{ margin: 16 }}>
  <TextInput
      label="Search"
      color="#1b197a"
      variant="outlined"
      trailing={props => (
        <IconButton icon={props => <Octicons name="search" size={24} color="black"  {...props} />} {...props} />
      )}
    />
    <ListItem style={{ margin: 16 }}
      leading={<AntDesign name="user" size={24} color="black" />}
      title="석현"
      secondaryText="Tel : 01093028348"
    />
    <ListItem style={{ margin: 16 }}
      leading={<AntDesign name="user" size={24} color="black" />}
      title="주희"
      secondaryText="Tel : 01093208348"
    />
    <ListItem style={{ margin: 16 }}
      leading={<AntDesign name="user" size={24} color="black" />}
      title="모름"
      secondaryText="Tel : 01094444444"
    />
    </Stack>
  </>
);

export default App;