import React from "react";
import styled from "styled-components";
import image9 from "../../assets/photo9.png";
import time from "../../assets/time1.svg";
import dinning from "../../assets/dinning1.svg";

const Container = styled.div`
  /* padding: 0px 234px; */

  display: flex;
  justify-content: center;

  .wrapper {
    width: 969px;

    h1 {
      padding-top: 52px;
      font-family: "Playfair Display", serif;
      font-weight: bold;
      font-size: 48px;
    }

    .top {
      font-family: "Montserrat", sans-serif;
      font-style: italic;
      font-size: 14px;
      color: #4f4f4f;
      width: 592px;
      height: 51px;
      padding: 12px 0px;
    }

    img {
      width: 100%;
      margin-top: 32px;
      /* width: 969px;
    height: 470px; */
    }

    footer {
      display: flex;
      justify-content: center;
      margin: 15px 0px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      color: #a9a9a9;
    }
  }
`;

const Content = styled.div`
  display: flex;

  .left {
    flex: 1;
  }

  .panel {
    /* width: 500px; */

    h3 {
      color: #333333;
      font-family: Playfair Display;
      font-weight: bold;
      font-size: 24px;
      width: 500px;
      margin-top: 38px;
    }

    h4 {
      font-family: Playfair Display;
      font-style: italic;
      font-weight: normal;
      margin: 32px 0px;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 25px;
      color: #333333;

      input {
        margin-right: 18px;
      }

      span {
        font-weight: bolder;
        font-family: "Montserrat", sans-serif;
      }
    }

    .holder {
      display: flex;
      margin: 30px 0px;
      /* height: auto; */
      justify-content: center;
      align-items: center;

      /* justify-content:center; */
      button {
        background: #f2994a;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        padding: 6px 14px;
        align-self: center;
        font-family: "Playfair Display", serif;
        height: 36px;
        margin-right: 18px;
        align-self: flex-start;
      }

      p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
      }

      span {
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
      }
    }

    .source {
      color: #bdbdbd;
      font-family: Montserrat;
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
margin-top:48px;
margin-bottom:98px;

    }
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-top: 38px;
    /* align-items:left; */
  }

  .box {
    /* padding: 10px; */
    width: 216px;
    height: 367px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    /* padding-bottom:8px; */
  }

  .box-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:40px;
    opacity:0.7;

.box-content{
    /* padding:28px 10px; */
    width:94px;
    margin-right:48px;

    span{
        color: #F2994A;
    }
}

  }

  #icon {
    /* color: #f2994a; */
    width: 36px;
    height: 36px;
    margin-top:0px;
    margin-left:20px;
    flex:1;
  }

  .top-text {
    color: #bdbdbd;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    text-transform: uppercase;
  }

  .bottom-text {
    font-family: Montserrat;
    font-style: normal;
    font-size: 12px;
    font-weight:600;
    
    
  }
`;

const Recipe = () => {
  return (
    <Container>
      <div className="wrapper">
        <h1>Classic Cheesecake Recipe</h1>
        <p className="top">
          Look no further for a creamy and ultra smooth classic cheesecake
          recipe! Paired with a buttery graham cracker crust, no one can deny
          its simple decadence. For the best results, bake in a water bath.
        </p>
        <img src={image9} alt='cake' />
        <Content>
          <div className="left">
            <div className="panel">
              <h3>Ingredients</h3>
              <h4> Graham Cracker Crust</h4>
              <ul>
                <li>
                  <input type="checkbox" />1 and 1/2 cups (150g)
                  <span> graham cracker crumbs </span>
                  (about 10 full sheet graham crackers)
                </li>
                <li>
                  <input type="checkbox" />5 Tablespoons (70g)
                  <span> unsalted</span> butter, melted
                </li>
                <li>
                  <input type="checkbox" />
                  1/4 cup (50g) <span> granulated sugar </span>
                </li>
              </ul>

              <h4> Cheesecake</h4>
              <ul>
                <li>
                  <input type="checkbox" />
                  four 8-ounce blocks (904g) full-fat
                  <span> cream cheese </span>, softened to room temperature
                </li>
                <li>
                  <input type="checkbox" />1 cup (200g)
                  <span> sour cream</span>, at room temperature
                </li>
                <li>
                  <input type="checkbox" />1 teaspoon
                  <span> pure vanilla extract </span>
                </li>
                <li>
                  <input type="checkbox" />2 teaspoons
                  <span> fresh lemon juice </span>(optional, but recommended)
                </li>
                <li>
                  <input type="checkbox" />3 large
                  <span> eggs</span>, at room temperature
                </li>
                <li>
                  <input type="checkbox" />
                  topping suggestions: salted caramel, lemon curd, strawberry
                  topping, chocolate ganache, red wine chocolate ganache, fresh
                  fruit, whipped cream, or raspberry sauce (recipe in notes)
                </li>
              </ul>

              <h3>Instructions</h3>
              <div className="holder">
                <button>1</button>
                <p>
                  Adjust the oven rack to the lower-middle position and preheat
                  oven to 350°F (177°C).
                </p>
              </div>
              <div className="holder">
                <button>2</button>
                <p>
                  <span> Make the crust:</span> Using a food processor, pulse
                  the graham crackers into crumbs. Pour into a medium bowl and
                  stir in sugar and melted butter until combined. (You can also
                  pulse it all together in the food processor.) Mixture will be
                  sandy. Press firmly into the bottom and slightly up the sides
                  of a 9-inch or 10-inch springform pan. No need to grease the
                  pan first. I use the bottom of a measuring cup to pack the
                  crust down tightly. Pre-bake for 8 minutes. Remove from the
                  oven and place the hot pan on a large piece of aluminum foil.
                  The foil will wrap around the pan for the water bath in step
                  4. Allow crust to slightly cool as you prepare the filling.
                </p>
              </div>
              <div className="holder">
                <button>3</button>
                <p>
                  <span> Make the filling:</span> Using a handheld or stand
                  mixer fitted with a paddle attachment, beat the cream cheese
                  and granulated sugar together on medium-high speed in a large
                  bowl until the mixture is smooth and creamy, about 2 minutes.
                  Add the sour cream, vanilla extract, and lemon juice then beat
                  until fully combined. On medium speed, add the eggs one at a
                  time, beating after each addition until just blended. After
                  the final egg is incorporated into the batter, stop mixing. To
                  help prevent the cheesecake from deflating and cracking as it
                  cools, avoid over-mixing the batter as best you can.
                </p>
              </div>
              <div className="holder">
                <button>4</button>
                <p>
                  <span> Prepare the simple water bath (see note)</span> Boil a
                  pot of water. You need 1 inch of water in your roasting pan
                  for the water bath, so make sure you boil enough. I use an
                  entire kettle of hot water. As the water is heating up, wrap
                  the aluminum foil around the springform pan. Pour the
                  cheesecake batter on top of the crust. Use a rubber spatula or
                  spoon to smooth it into an even layer. Place the pan inside of
                  a large roasting pan. Carefully pour the hot water inside of
                  the pan and place in the oven. (Or you can place the roasting
                  pan in the oven first, then pour the hot water in. Whichever
                  is easier for you.
                </p>
              </div>
              <div className="holder">
                <button>5</button>
                <p>
                  Bake cheesecake for 55-70 minutes or until the center is
                  almost set. When it’s done, the center of the cheesecake will
                  slightly wobble if you gently shake the pan. Turn the oven off
                  and open the oven door slightly. Let the cheesecake sit in the
                  oven in the water bath as it cools down for 1 hour. Remove
                  from the oven and water bath, then cool cheesecake completely
                  at room temperature. Then refrigerate the cheesecake for at
                  least 4 hours or overnight
                </p>
              </div>
              <div className="holder">
                <button>6</button>
                <p>
                  Use a knife to loosen the chilled cheesecake from the rim of
                  the springform pan, then remove the rim. Using a clean sharp
                  knife, cut into slices for serving. For neat slices, wipe the
                  knife clean and dip into warm water between each slice.
                </p>
              </div>
              <div className="holder">
                <button>7</button>
                <p>
                  Serve cheesecake with desired toppings. Cover and store
                  leftover cheesecake in the refrigerator for up to 5 days.
                </p>
              </div>
              <p className="source">
                Source: https://sallysbakingaddiction.com/classic-cheesecake/
              </p>
            </div>
          </div>
          <div className="right">
            <div className="box">
              <div className="box-item">
                <img id="icon" src={dinning} alt='dinning' />
                <div className="box-content">
                  <p className="top-text">Yields </p>
                  <p className="bottom-text">
                    <span> 12 servings </span>
                  </p>
                </div>
              </div>
              <div className="box-item">
                <img id="icon" src={time}  />
                <div className="box-content">
                  <p className="top-text">Prep TIme </p>
                  <p className="bottom-text">45 minutes</p>
                </div>
              </div>
              <div className="box-item">
                <img id="icon" src={time} alt='time' />
                <div className="box-content">
                  <p className="top-text">Cook Time </p>
                  <p className="bottom-text">1 hour</p>
                </div>
              </div>
              <div className="box-item">
                <img id="icon" src={time} />
                <div className="box-content">
                  <p className="top-text">Total Time </p>
                  <p className="bottom-text">7,75 hours</p>
                </div>
              </div>
            </div>
          </div>
        </Content>

        <footer> Zainab Aziz @ DevChallenges.io</footer>
      </div>
    </Container>
  );
};

export default Recipe;
