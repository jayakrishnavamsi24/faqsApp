import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faqsList: props.faqsList,
    }
  }

  toggleAnsVisibility = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachFaq => {
        if (id === eachFaq.id) {
          return {...eachFaq, isAnsVisible: !eachFaq.isAnsVisible}
        }
        return eachFaq
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="outer-space">
        <div className="faqCont">
          <h1 className="title"> FAQs </h1>
          <ul>
            {faqsList.map(eachFaq => (
              <FaqItem
                faqItem={eachFaq}
                key={eachFaq.id}
                toggleAnsVisibility={this.toggleAnsVisibility}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
