import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="svg-frame">
        <svg style={{ '--i': 0, '--j': 0 }}>
          <g id="out1">
            <path
              d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172Z"
              strokeMiterlimit={16}
              strokeWidth={2}
              stroke="#000"
              fill="none"
            />
          </g>
        </svg>

        <svg style={{ '--i': 1, '--j': 1 }}>
          <g id="out2">
            <mask fill="white" id="path-2-inside-2_111_3212">
              <path
                d="M102.892 127.966C93.3733 144.905 88.9517 160.527 90.2897 178.19C94.3752 211.971 108.646 226.908 122.814 237.541C125.273 239.401 127.754 241.229 130.302 243.017C134.64 246.118 139.056 249.17 143.537 252.174"
              />
            </mask>
            <path
              mask="url(#path-2-inside-2_111_3212)"
              fill="#00FFFF"
              d="M102.892 127.966L105.5 130.5"
            />
          </g>
        </svg>

        <svg style={{ '--i': 0, '--j': 2 }}>
          <g id="inner3">
            <circle cx="172" cy="172" r="10" fill="black" />
          </g>
        </svg>
      </div>
    </StyledWrapper>
  );
};

export default Loader;

// Styled Component
const StyledWrapper = styled.div`
  .svg-frame {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 20px;
    background-color: #f0f0f0;
  }

  svg {
    width: 100px;
    height: 100px;
    animation: spin 2s linear infinite;
    animation-delay: calc(var(--i) * 0.5s + var(--j) * 0.3s);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
