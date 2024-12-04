import React from "react"
import styled from "styled-components"

import shabber from "$assets/faculty/1677306910shabbir.jpg"

const Card1 = () => {
  return (
    <StyledWrapper>
      <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
        <div className="card">
          <div className="main-content">
            <div className="header">
              <img src={shabber} alt="sridevi" />
            </div>
            <div className="categories"/>
          </div>
          <div className="footer">
            <h1 id="name">Dr. Syed Shabbeer Ahmad</h1>
            <h2 id="designation">Professor, Dept. Of CSE</h2>
            <h2 id="quote">
              <i>
                -Success in education is built on collaboration, guidance, and
                shared vision
              </i>
            </h2>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`

#quote{
  position: relative;
  top: 3rem;
  font-size:1.1rem;
color: #ffffff;

}

  #role{
    color: #ffffff;
  }

  #name{
    color: #ffffff;
    font-size:1.5rem;
    margin-top: 1rem;
  }
   #designation{
     color: #717171;
     font-size:1.4rem;
     }
  .card img{

    border-radius: 8%;
  }
  .card {
    margin-top: 20px;
    // margin-left: 20px;
    margin-bottom: 20px;
    // width: 320px;
    // height: 350px;
    width: 25rem;
    height: 35rem;
    padding: 20px;
    color: white;
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(-135deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card .main-content {
    flex: 1;
  }

  .card .header span:first-child {
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
  }

  .card .heading {
    font-size: 24px;
    margin: 24px 0 16px;
    font-weight: 600;
  }

  .card .categories {
    display: flex;
    gap: 8px;
  }

  .card .categories span {
    background-color: #e81cff;
    padding: 4px 8px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 50em;
  }

  .card .footer {
    font-weight: 600;
    color: #717171;
    // margin-right: 2rem;
    margin-left: 1rem;
    margin-bottom: 9rem;
  }
    
  .card:hover{
    transform: scale(1.05);
  }`

export default Card1
