import React from "react";
import { Text, Pressable, Box, VStack, HStack, Heading } from "@gluestack-ui/themed";
import { IconDelete, IconEdit } from "../../../assets";
import { useNavigation } from "@react-navigation/native";
import { deleteNote } from "../../../actions/AuthAction";

// deklarasi komponen listnote dengan menerima prop:
const ListNote = ({ judul, isi, tanggal, status, category, noteId }) => {
  // menggunakan hook useNavigation untuk mendapatkan objek navigasi yang digunakan untuk berpindah antar layar
  const navigation = useNavigation();

  // Navigasi ke layar "EditNote" dengan membawa beberapa data catatan sebagai parameter
  const handleEditClick = () => {
    navigation.navigate("EditNote", {
      judul,
      isi,
      category,
      status,
      noteId,
    });
  };

  // Memanggil fungsi deleteNote untuk menghapus catatan berdasarkan noteId, dan kemudian melakukan navigasi ulang ke "MainApp".
  const handleDeleteClick = () => {
    deleteNote(noteId);
    navigation.replace("MainApp");
  };

  // render komponen-komponen seperti Box, VStack, HStack, Heading, danlain-lain
  return (
      <Box
        shadowColor="$black"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={"$25"}
        shadowRadius={"$3.5"}
        elevation={"$5"}
        backgroundColor="$white"
        padding={"$2"}
        width={"$full"}
        borderRadius={"$xl"}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        my={"$2"}
        px={"$5"}
        py={"$3"}
      >
        <VStack>
          <Heading size="2xl">{judul}</Heading>
          <Text size="md" maxWidth={"$64"}>{isi}</Text>
          <Box
            shadowColor="$black"
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={"$25"}
            shadowRadius={"$3.5"}
            elevation={"$5"}
            backgroundColor="$green700"
            borderRadius={"$lg"}
            py={"$2"}
            px={"$3"}
            alignItems="center"
            justifyContent="center"
            mt={"$3"}
          >
            <Text color="$white" fontWeight="$bold">
              {status}
            </Text>
          </Box>
        </VStack>
        <HStack>
          <Pressable onPress={handleEditClick}>
            <IconEdit />
          </Pressable>
          <Pressable onPress={handleDeleteClick}>
            <IconDelete />
          </Pressable>
        </HStack>
      </Box>
  );
};

// Mengekspor komponen ListNote agar dapat digunakan di file lain
export default ListNote;
