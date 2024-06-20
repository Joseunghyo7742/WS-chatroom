import { chatFormat } from '@/types/types';
import ChatBubble from './ChatBubble';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface chatRoomProps {
  chatDatas: chatFormat[];
}
function ChatRoom({ chatDatas }: chatRoomProps) {
  const user = useSelector((state: RootState) => state.user);
  return (
    <ChatsContainer>
      {chatDatas.map((chat, index) => {
        const hour = String(chat.createdDate.hour).padStart(2, '0');
        const minute = String(chat.createdDate.min).padStart(2, '0');
        return (
          <ChatBubble
            key={index}
            isOthers={chat.userId !== user.id}
            data={{ content: chat.content, published: `${hour}${minute}` }}
          />
        );
      })}
    </ChatsContainer>
  );
}

export default ChatRoom;

const ChatsContainer = styled.main`
  display: flex;
  flex-direction: column;
  background: white;
  gap: 8px;
`;
