# WebSocket Chat (공유 그림판)
프론트엔드 코드 레파지토리입니다.<br>
Node.js + Express + React + Socket.io

## 프로젝트 소개
간단한 소통을 위해 그림판을 공유할 수 있는 웹사이트입니다.
<br>

## 개요
### 배포 주소
 - https://websocket-chat-ddenzu.koyeb.app/

### 세부 내용
 - [https://tidal-sky-46b.notion.site/Seung-Ju-Kim-ce8841c405754d8da3b302c3e7abfbc8?p=022199140ed443ce8e28c54f87803f57&pm=c](https://tidal-sky-46b.notion.site/Seung-Ju-Kim-ce8841c405754d8da3b302c3e7abfbc8?p=92bce0c3d22f4e85a9e7ff4993620d4d&pm=c)

### 백엔드 레파지토리
 - https://github.com/ddenzu/websocketChat0

### 개발 시작일
 - 24.02.14일

### 맴버구성
 - 1인 개인 프로젝트

### 개발 환경
- `Node.js v20.10.0`
- **IDE** : Visual Studio Code
- **Framework** : Express(4.19.2)
- **Frontend** : React

## 주요 기능
#### 방 생성 및 참가
- 제목과 비밀번호를 설정하여 방 생성
- Socket.io 의 네임스페이스를 사용하여 방을 분리하고 상태를 관리
- React Query 를 사용하여 방 리스트 실시간 업데이트
- 비밀번호를 입력 시 서버에서 검증
#### 공유 기능
- 클라이언트에서 특정 행위가 끝나는 시점에 생성된 데이터를 웹소켓을 통해 서버로 보냄
- 서버에서 같은 네임스페이스에 연결된 클라이언트로 데이터를 방출
- 다른 클라이언트는 데이터를 받는 동시에 Canvas 가 업데이트 됨
#### 같은 방에 입장 시 공유되는 동작
- 선 그리기
- 선 굵기 조절
- 선 색상 변경
![ezgif com-optimize](https://github.com/user-attachments/assets/7c49d390-855d-41e4-b252-ad4eff7c49d6)
  
- 선 지우기
![ezgif com-optimize (3)](https://github.com/user-attachments/assets/f4a17e73-1f19-441f-b13e-bb32dd632d01)
  
- 이미지 파일 첨부
- 이미지 파일 위치 변경
![ezgif com-optimize (1)](https://github.com/user-attachments/assets/b7b2dcda-7923-4420-ba71-c0c44cb3b785)
  
## 배포
#### Koyeb
- Koyeb 과 websocketChat0 레파지토리를 연동하여 배포
