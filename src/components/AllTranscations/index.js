import { Component } from "react";
import AllTransactionsData from "../AllTransactionsData";
import "./index.css";

class AllTransaction extends Component {
  state = { AllTransactionData: [] };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = `https://bursting-gelding-24.hasura.app/api/rest/all-transactions/?limit=${10}&offset=${0}`;
    const options = {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": 1,
      },
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    const updated = data.transactions.map((each) => ({
      id: each.id,
      category: each.category,
      date: each.date,
      transactionName: each.transaction_name,
      type: each.type,
      userId: each.user_id,
      amount: each.amount,
    }));
    this.setState({ AllTransactionData: updated });
  };

  render() {
    const { AllTransactionData } = this.state;
    console.log(AllTransactionData);
    return (
      <div>
        <div className="all-transactions">
          <p className="category">TransactionName</p>
          <p className="category1">category</p>
          <p className="category2">Date</p>
          <p className="category3">Amount</p>
        </div>
        <ul>
          {AllTransactionData.map((each) => (
            <AllTransactionsData key={each.id} data={each} />
          ))}
        </ul>
      </div>
    );
  }
}

export default AllTransaction;
