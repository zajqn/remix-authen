import { Link } from "react-router-dom";
import { FaArrowRight, FaDollarSign, FaChartBar } from 'react-icons/fa';

export default function Index() {
  return (
    <main>
      <section className="marketing-section">
        <header>
          <FaDollarSign />
          <h2>A Central Space</h2>
        </header>
        <div className="marketing-content">
          <div className="marketing-image">
            <img src="/images/expenses-management.jpg" alt="A list of expenses." />
          </div>
        </div>
        <div className="marketing-explanation">
          <p>Manage your expenses in one central place.</p>
          <p>
            <Link className="cta" to="/expenses">
              <span>Get Started</span>
              <FaArrowRight />
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
