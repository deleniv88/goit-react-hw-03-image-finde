import PropTypes from "prop-types";
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionhistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>{items.map(it => (
                <tr key={it.id}>
                    <td>{it.type}</td>
                    <td>{it.amount}</td>
                    <td>{it.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    type: PropTypes.string,
    amout: PropTypes.number,
    currency: PropTypes.string
}