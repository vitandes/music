import styled from "styled-components";



export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin-top: 20px;
  position: fixed;
  top:4%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 100vw;
  
  

   ul, .div-sign-in {
    list-style-type: none;
    margin: 0;
    padding: 10px 20px;
    display: flex;
    gap: 20px;
    border-radius: 15px;
    border: 1px solid #000000;
    height: 100%;
    background-color: #0000009b;
     box-shadow: 0px 0px 18px 13px rgba(0,0,0,0.1);

    
    
    
  }

   

  li {
    
    padding: 7px 0px;
    
    
    
  }

  a, .log-in{
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    padding: 7px 16px;
    
  }

  a:hover {
    background-color: #ffffffd7;
    border-radius: 5px;
    color: #000;
    
  }

  .sign-in{
    padding: 7px 16px;
    background: rgb(141,37,149);
    background: linear-gradient(341deg, rgba(141,37,149,1) 12%, rgba(245,107,47,1) 100%);
    border-radius: 8px;
    color: #fff;
    font-weight: 600;
  }

   

  .sign-in:hover{
   
    background: rgb(141,37,149);
    background: linear-gradient(341deg, #6f1d75 12%, #bf5223 100%);
    border-radius: 8px;
    color:#fff;
  }

  .log-in:hover {
    background-color: #ffffffd7;
    color: #000;
    border-radius: 5px;
  }
`;

export const Parallax = styled.div`
   
`
