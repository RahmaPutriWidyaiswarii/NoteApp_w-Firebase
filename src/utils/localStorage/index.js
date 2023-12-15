import AsyncStorage from '@react-native-async-storage/async-storage';

// Fungsi ini digunakan untuk menyimpan data ke AsyncStorage
// Parameter key digunakan sebagai kunci atau nama untuk mengidentifikasi data yang disimpan.
// Parameter value adalah data yang akan disimpan, dan akan diubah menjadi format JSON sebelum disimpan ke AsyncStorage
// Menggunakan fungsi await AsyncStorage.setItem() untuk menyimpan data. Jika terjadi kesalahan, akan ditangkap oleh blok catch.
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

// Fungsi ini digunakan untuk mengambil data dari AsyncStorage berdasarkan kunci yang diberikan
// Menggunakan await AsyncStorage.getItem() untuk mendapatkan data yang sesuai dengan kunci
// Jika data ditemukan (tidak null), data tersebut diubah dari format JSON menggunakan JSON.parse() sebelum dikembalikan. Jika tidak ditemukan, fungsi mengembalikan nilai default (0 dalam contoh ini), tetapi bisa diubah sesuai kebutuhan.
// Kesalahan saat membaca data ditangkap dan dapat di-handle di blok catch
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      return JSON.parse(value)
    }else{
      return 0;
    }
  } catch (e) {
    // error reading value
  }
};

// Fungsi ini digunakan untuk menghapus semua data yang disimpan di AsyncStorage
// Menggunakan AsyncStorage.clear() untuk membersihkan semua data

export const clearStorage = async() =>{
  AsyncStorage.clear();
}
