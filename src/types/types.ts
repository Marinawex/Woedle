//keyBoard interface
export interface Key {
  key: string;
  status: string;
}

//words interface
export interface Word {
  letter: string;
  status: string;
}

export interface Words {
  words: Array<Array<Word>>;
  setWords: React.SetStateAction<Words>;
}

export interface serverResponse {
  arrayResult: Array<Word>;
  win: boolean;
}

//props interface
export interface TileProps {
  letter: string;
  className: string;
  letterIndex: number;
  wordIndex: number;
  id: string | undefined;
}

//user interfaces
export interface user {
  email?: string | undefined;
  name?: string | undefined;
}

export interface AuthContextType {
  currentUser: user | null;
  setCurrentUser: (user: user | null) => void;
}

// Modal interfaces
export interface LoginProps {
  onLogInClose: () => void;
}

export interface HelpModalProps {
  onClose: () => void;
}

export interface WordModalProps {
  onCloseWordModal: () => void;
  gameState: string;
}

//useGame interface
export interface IUseGame {
  words: Array<Array<Word>>;
  game: string;
  isWin: boolean;
  onCloseWordModal: () => void;
  activeTileIndex: number;
  setActiveTileIndex: (index: number) => void;
  activeWordIndex: number;
  setActiveWordIndex: (index: number) => void;
  addLetter: (letter: string) => void;
  deleteLetter: () => void;
  checkWord: (keys: Array<Key>, setKeys: React.Dispatch<React.SetStateAction<Key[]>>) => void;
  addStyleToTheBoard: (guess: object[]) => void;
  addStyleToTheKeyBoard: (guess: object[], keys: Key[], setKeys: React.Dispatch<React.SetStateAction<Key[]>>) => void;
  checkWin: (serverResponse: serverResponse) => void;
}
