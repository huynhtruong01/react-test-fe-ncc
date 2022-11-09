import React from "react"
import icon1 from "../../images/css-icon 1.png"
import icon2 from "../../images/html-icon 1.png"
import logo from "../../images/logoNCC 1.png"
import icon3 from "../../images/url-icon 1.png"
import "./Content.css"

Content.propTypes = {}

function Content(props) {
    return (
        <div class="content">
            <div class="content__container">
                <div class="content__logo">
                    <img src={logo} alt="logoNCC" />
                </div>
                <div class="content__main">
                    <h4>Lorem ipsum dolor sit asmet?</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed tristique consequat placerat. Vestibulum auctor
                        pellentesque sem, eu posuere erat hendrerit quis.
                        Maecenas vel consequat turpis. Nam facilisis, ligula in
                        mattis sodales, augue justo tristique nulla, sed lacinia
                        ante eros ut mi. Morbi vitae diam augue. Aliquam vel
                        mauris a nibh auctor commodo. Praesent et nisi eu justo
                        eleifend convallis. Quisque suscipit maximus vestibulum.
                        Phasellus congue mollis orci, sit amet luctus augue
                        tristique eu. Donec vulputate odio neque, sed semper
                        turpis pellentesque a.
                    </p>
                </div>
                <div class="content__list">
                    <div class="content__item">
                        <h3 class="content__item--title">
                            Lorem ipsum dolor sit asmet
                        </h3>
                        <div class="content__item--main">
                            <img src={icon1} alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed non dui sodales, faucibus
                                libero ut, posuere felis. Donec imperdiet
                                suscipit accumsan. Aenean consequat condimentum
                                velit ut tempor. Nam porta massa in metus
                                bibendum congue. Pellentesque ultrices liquam
                                egestas nunc at ullamcorper ultricies. Donec
                                feugiat velit nulla, vel sodales est ullamcorper
                                id. Aenean consequat condimentum velit ut
                                tempor. Nam porta massa in metus bibendum
                                congue. Pellentesque ultrices vestibulum mattis.
                            </p>
                        </div>
                    </div>
                    <div class="content__item">
                        <h3 class="content__item--title">
                            Lorem ipsum dolor sit asmet
                        </h3>
                        <div class="content__item--main">
                            <img src={icon2} alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed non dui sodales, faucibus
                                libero ut, posuere felis. Donec imperdiet
                                suscipit accumsan. Aenean consequat condimentum
                                velit ut tempor. Nam porta massa in metus
                                bibendum congue. Pellentesque ultrices liquam
                                egestas nunc at ullamcorper ultricies. Donec
                                feugiat velit nulla, vel sodales est ullamcorper
                                id. Aenean consequat condimentum velit ut
                                tempor. Nam porta massa in metus bibendum
                                congue. Pellentesque ultrices vestibulum mattis.
                            </p>
                        </div>
                    </div>
                    <div class="content__item">
                        <h3 class="content__item--title">
                            Lorem ipsum dolor sit asmet
                        </h3>
                        <div class="content__item--main">
                            <img src={icon3} alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed non dui sodales, faucibus
                                libero ut, posuere felis. Donec imperdiet
                                suscipit accumsan. Aenean consequat condimentum
                                velit ut tempor. Nam porta massa in metus
                                bibendum congue. Pellentesque ultrices liquam
                                egestas nunc at ullamcorper ultricies. Donec
                                feugiat velit nulla, vel sodales est ullamcorper
                                id. Aenean consequat condimentum velit ut
                                tempor. Nam porta massa in metus bibendum
                                congue. Pellentesque ultrices vestibulum mattis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
