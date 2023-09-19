import {localStorageItems} from "./constants";

type localStorageDataType = {[K: string]: string}
export const pushToLocalStorage = ({value, itemName}: {value: string, itemName: localStorageItems}) => {
  const storageData = localStorage.getItem('userInfo');
  if (!storageData) {
    const newUserInfo: localStorageDataType = {
      [itemName]: value
    }
    localStorage.setItem('userInfo', JSON.stringify(newUserInfo))
  } else {
    const userInfo: localStorageDataType = JSON.parse(storageData);

    userInfo[itemName] = value;
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }
}
