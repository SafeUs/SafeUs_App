import React, { useState } from "react";
import {
  Provider,
  Stack,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
  TextInput,
} from "@react-native-material/core";

const App = () => {
  const [visible, setVisible] = useState(true);
  return (
      <>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="신고하기🚨" />
        <DialogContent>
          <Stack spacing={2}>
            <Text>고유 ID를 통해 불량 스마트보안등을 신고해주세요!</Text>
            <TextInput label="고유 ID" variant="standard" color="#1b197a" style= {{margin : 17}}/>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            title="취소"
            compact
            variant="text"
            color="#1b197a"
            onPress={() => setVisible(false)}
          />
          <Button
            title="신고"
            compact
            variant="text"
            color="#1b197a"
            onPress={() => {setVisible(false),
        alert("고장 신고가 접수되었습니다.\n 감사합니다.")}}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

const AppProvider = () => (
  <Provider>
    <App />
  </Provider>
);

export default AppProvider;