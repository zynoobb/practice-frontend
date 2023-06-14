import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(prop) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.svg" />
            <S.Info>
              <S.Writer>{prop.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>{prop.data?.fetchBoard?.createdAt}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{prop.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{prop.data?.fetchBoard?.contents}</S.Contents>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button>목록으로</S.Button>
        <S.Button>수정하기</S.Button>
        <S.Button>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
