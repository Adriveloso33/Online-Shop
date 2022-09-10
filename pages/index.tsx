import React from "react";
import products from "../data/products.json";
import Cards from "../components/Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/style.module.css';

interface Props{
  products: {
    description: string;
    image: string;
    price: number;
    id: number;
  }
}
interface State{
  filter: string,
  data: {}[],
}


class IndexRoute extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state={
      filter: '',
      data: products
    }
  }

  filterData=(): void => {
    var search: {}[] = products.filter(item=>{
      if(item.description.toString().includes(this.state.filter)){
        return item;
      }
    });
    this.setState({data: search});
  }

  oderDataAsc=(): void => {
    var order = products.sort(function (a: any, b: any) {
      return a.price - b.price;
    });
    this.setState({data: order});
  }

  oderDataDesc=(): void => {
    var order = products.sort(function (a: any, b: any) {
      return b.price - a.price;
    });
    this.setState({data: order});
  }

  onChange = async (e: any): Promise<void> => {
    await this.setState({filter: e.target.value});
    this.filterData();
  }

  render() {
    return (
      <>
      <br />
      <div>
        <input
          type="text"
          placeholder="Search Product"
          className={styles.input}
          value={this.state.filter}
          onChange={this.onChange}
        />
      </div>
      <br />
      <button type="button" className={styles.input} onClick={this.oderDataAsc}>Order ASC by price</button>
      <br />
      <button type="button" className={styles.input} onClick={this.oderDataDesc}>Order DESC by price</button>
      <div className="container">
          <br />
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
            {this.state.data.map(products => {
              return (
                <div className="col" key={Math.random()}>
                  <Cards products={products} {...this.props} />
                </div>
              );
            })}
          </div>
        </div>
      </>
      
    )
  }
  
}

export default IndexRoute;