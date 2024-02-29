import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Room from './room.js';

const App = () => {
  const [roomName, setRoomName] = useState('');
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동 처리
  const [roomList, setRoomList] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000); 
  }, []);

  useEffect(()=>{
    console.log(roomList)
  }, [roomList])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/data');
      if (!response.ok) {
        throw new Error('Failed to fetch roomList');
      }
      const roomListData = await response.json();
      setRoomList(roomListData);
    } catch (error) {
      console.error('Error fetching roomList:', error);
    }
  };
  const handleButtonClick = async () => {
    try {
      if (!roomName) {
        alert('방 제목을 지정해 주세요.');
        return;
      }
      return navigate('/room', { state: { roomName } });
    } catch (error) {
      console.error(error);
    }
  };
  const handleJoinRoom = (roomName) => {
    setRoomName(roomName);
    navigate('/room', { state: { roomName } });
  };

  return (
      <Routes>
        <Route path='/' element={
          <div className='roomList'>
            <h1>WebSocket Chat</h1>
            <div style={{display:'flex', justifyContent: 'center' }}>
            <input
              style={{outline:'none',padding:'5px',borderRadius:'10px'}}
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="방제목 설정"
            />
            <button style={{padding:'4px', marginLeft:'5px'}} onClick={handleButtonClick}>Send</button>
            </div>
            <h2>-Room List-</h2>
            {roomList ? (
              Object.keys(roomList).map((key, index) => (
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '7px' }} key={index}>
                  방제: {key}, 참가자: {roomList[key]} 명
                  <button style={{ marginLeft: '15px' }} onClick={() => handleJoinRoom(key)}>Join</button>
                </div>
              ))
            ) : (
              <h4>존재하는 방이 없습니다.</h4>
            )}
          </div>
        }/>
        <Route path='/room' element={<Room/>}/>
      </Routes>
  );
};

export default App;