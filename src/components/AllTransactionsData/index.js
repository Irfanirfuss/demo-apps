import "./index.css";

const AllTransactionsData = (props) => {
  const { id, category, date, amount, type, transactionName } = props;

  return (
    <div>
      <div>
        <p>ArrowIcon</p>
        <p>{transactionName}</p>
        <p>{category}</p>
        <p>{date}</p>
        <p>{amount}</p>
        <p>updateIcon</p>
        <p>DeleteIcon</p>
      </div>
    </div>
  );
};

export default AllTransactionsData;
