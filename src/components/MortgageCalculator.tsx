import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function MortgageCalculator() {
  const [price, setPrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculateMonthlyPayment = () => {
    const principal = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (monthlyRate === 0) return principal / numberOfPayments;
    
    const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return payment.toFixed(2);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-blue-50 p-2 rounded-lg">
          <Calculator className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">Mortgage Calculator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Home Price ($)</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Down Payment ($)</label>
          <input 
            type="number" 
            value={downPayment} 
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Interest Rate (%)</label>
            <input 
              type="number" 
              step="0.1"
              value={interestRate} 
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Loan Term (Yrs)</label>
            <select 
              value={loanTerm} 
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value={15}>15 Years</option>
              <option value={30}>30 Years</option>
            </select>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 mt-6">
          <div className="text-center">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Estimated Monthly Payment</p>
            <p className="text-3xl font-bold text-blue-600">${calculateMonthlyPayment()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
