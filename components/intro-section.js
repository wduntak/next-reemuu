import { Component } from 'react'

export default class IntroSection extends Component {
    render () {
        return (
          <section className="flex flex-col justify-center text-center mb-24">
            <div>
              <h5 className="text-sm font-bold">HI, WE'RE REEMUU. 👋</h5>
            </div>
            <div className="max-w-3xl text-3xl">
              <p>
                We're a design and tech company that speaks all the jargon. But
                luckily, we speak human too.{" "}
                <em className="font-serif">
                  We design, we write code, and we love the business side of it
                  all.
                </em>{" "}
                We are hired to <strong>work on new problems together</strong>,
                instead of telling people what they want to hear.
              </p>
            </div>
          </section>
        );
    }
}