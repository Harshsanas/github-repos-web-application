import styled from "styled-components";

export const MainContainer = styled.div`

  label {
    font-size: 22px;
    border: none;
    color: #425a6f;
  }
  hr {
    border: 1px solid #eee;
  }
  input {
    width: 97%;
    margin: 0 0 0 10px;
    padding: 14px 0 14px 40px;
    font-size: 16px;
    border: 1px solid #eee;
    color: gray;
    border-radius: 8px;
  }
  input:focus {
    outline: none;
    border-color: #eee;
    box-shadow: 0 0 10px gray;
  }
  .input-container {
    position: relative;
  }
  .input-container input {
    padding-left: 30px;
  }
  .icon {
    position: absolute;
    top: 45%;
    color: gray;
    transform: translateY(-50%);
    margin-left: 20px;
  }
`