/* HOC = higher order components, pattern
 вынесли всю логику работы с сетью, какой компонент сейчас надо отображать в отдельный компонент*/
import React, {Component} from "react";
import Spinner from "../spinner";

const withData = (View, getData) => {//экспортируем анонимный класс из функции
    return class extends Component { //создали компонент обёртку

        state = {
            data: null
        };

        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({
                        data
                    });
                });
        }

        render() {
            const {data} = this.state;

            if (!data) {
                return <Spinner/>;
            }

            return <View {...this.props} data={data}/>
        }
    };
}

export default withData;
