import { css } from '@emotion/react';

const Header = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <h3>오늘은 📆</h3>
      <h1
        css={css`
          color: rgb(37, 147, 255);
        `}
      >
        {new Date().toDateString()}
      </h1>
    </div>
  );
};

export default Header;
