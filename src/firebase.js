//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyDF_34n5UoiY1nDsRiY8gcILqT-aGACfsw",
  authDomain: "myboard-21.firebaseapp.com",
  projectId: "myboard-21",
  storageBucket: "myboard-21.appspot.com",
  messagingSenderId: "936044824806",
  appId: "1:936044824806:web:de15488d7c8458add1d327",
  measurementId: "G-PK0JZ3TPNB",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
