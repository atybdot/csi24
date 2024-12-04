import React from 'react';
import styled from 'styled-components';
import zain from '$assets/faculty/Zain-sir.jpeg'
import Card1 from './card-1'
import Card2 from './card-2'
import Card3 from './card-3'


const Card = () => {
  return (
    <>



  
    <StyledWrapper>
      <div className='main flex items-center justify-center m-10 '>
      <div className="card flex flex-col items-center justify-center  ">
        <div className="card__border" />
        <div className="main-content">
          <div className="header">
            <img src={zain} alt="zain" />
          </div>
          <div className="categories">
            
          </div>
        </div>
        <div className="footer">
          <h1 id="name">Mr. Zainuddin Naveed</h1>
          <h2 id="designation">Professor, Dept. Of CSE</h2>
        </div>
      
      </div>
      </div>
    </StyledWrapper>

     
    <div className="cards-container flex flex-row gap-12 justify-center">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </>
  );
}

const StyledWrapper = styled.div`
  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(240, 15%, 9%);
    --paragraph: hsl(0, 0%, 83%);
    --line: hsl(240, 9%, 17%);
    --primary: hsl(266, 92%, 58%);

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 40rem;
    padding: 1rem;
    width: 30rem;
    background-color: hsla(240, 15%, 9%, 1);
    background-image: radial-gradient(
        at 88% 40%,
        hsla(240, 15%, 9%, 1) 0px,
        transparent 85%
      ),
      radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
      radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
      radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%);

    border-radius: 1rem;
    box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
  }

    #role{
    color: #ffffff;
  }

  #name, #designation{
    color: #ffffff;
  }

   .card .categories {
    display: flex;
    gap: 8px;
  }
    
  .card .heading {
    font-size: 24px;
    margin: 24px 0 16px;
   
  }
      .card img{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25rem;
      height: 25rem;
      margin-top: 2rem;

      border-radius: 8%;
  }

  
  .card .header span:first-child {
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
    
  }


  .card .card__border {
    overflow: hidden;
    pointer-events: none;

    position: absolute;
    z-index: -2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: calc(100% + 3.5px);
    height: calc(100% + 3.5px);
    background-image: linear-gradient(
      0deg,
      hsl(0, 0%, 80%) -50%,
      hsl(0, 0%, 20%) 100%
    );

    border-radius: 1rem;
  }

.card .footer {
    font-size: 1.3rem;
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
    margin-bottom: 5rem;
  }

.card .main-content {
    flex: 1;
  }

  .card .card__border::before {
    content: "";
    pointer-events: none;

    position: fixed;
    z-index: 200;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%), rotate(0deg);
    transform-origin: left;

    width: 200%;
    height: 10rem;
    background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0) 0%,
      hsl(277, 95%, 60%) 40%,
      hsl(277, 95%, 60%) 60%,
      hsla(0, 0%, 40%, 0) 100%
    );

    animation: rotate 4s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .card .card_title__container .card_title {
    font-size: 1rem;
    color: var(--white);
  }

  .card .card_title__container .card_paragraph {
    margin-top: 0.25rem;
    width: 65%;

    font-size: 0.5rem;
    color: var(--paragraph);
  }

  .card .line {
    width: 100%;
    height: 0.1rem;
    background-color: var(--line);

    border: none;
  }

  .card .card__list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card .card__list .card__list_item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .card .card__list .card__list_item .check {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1rem;
    height: 1rem;
    background-color: var(--primary);

    border-radius: 50%;
  }

  .card .card__list .card__list_item .check .check_svg {
    width: 0.75rem;
    height: 0.75rem;

    fill: var(--black);
  }

  .card .card__list .card__list_item .list_text {
    font-size: 0.75rem;
    color: var(--white);
  }

  .card .button {
    cursor: pointer;

    padding: 0.5rem;
    width: 100%;
    background-image: linear-gradient(
      0deg,
      rgba(94, 58, 238, 1) 0%,
      rgba(197, 107, 240, 1) 100%
    );

    font-size: 0.75rem;
    color: var(--white);

    border: 0;
    border-radius: 9999px;
    box-shadow: inset 0 -2px 25px -4px var(--white);
  }`;

export default Card;
