import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import NamePage from './components/NamePage';
import CouponPage from './components/CouponPage';
import LimitPage from './components/LimitPage';
import WithdrawPage from './components/WithdrawPage';
import SecurityPage from './components/SecurityPage';
import VideoPage from './components/VideoPage';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [userName, setUserName] = useState('');
  const [currentCoupon, setCurrentCoupon] = useState(1);
  const [totalValue, setTotalValue] = useState(0);

  const coupons = [
    {
      id: 1,
      product: 'Nike Air Force (Black)',
      value: 850,
      barcode: '96714954',
      image: 'nike-black'
    },
    {
      id: 2,
      product: 'Nike Air Force (Rosa)',
      value: 920,
      barcode: '87526465',
      image: 'nike-pink'
    },
    {
      id: 3,
      product: 'JBL Caixa de Som',
      value: 780,
      barcode: '94141786',
      image: 'jbl'
    },
    {
      id: 4,
      product: 'Nike Air Force (White)',
      value: 1050,
      barcode: '73892156',
      image: 'nike-white'
    },
    {
      id: 5,
      product: 'Apple AirPods Pro',
      value: 900,
      barcode: '56289437',
      image: 'airpods'
    },
    {
      id: 6,
      product: 'Samsung Galaxy (Light Blue)',
      value: 700,
      barcode: '81795889',
      image: 'samsung'
    }
  ];

  const handleStart = () => {
    setCurrentPage('name');
  };

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setCurrentPage('coupon');
  };

  const handleNextCoupon = () => {
    if (currentCoupon < 6) {
      const nextCoupon = currentCoupon + 1;
      setCurrentCoupon(nextCoupon);
      setTotalValue(prev => prev + coupons[nextCoupon - 1].value);
    } else {
      setCurrentPage('limit');
    }
  };

  const handleGoToWithdraw = () => {
    setCurrentPage('withdraw');
  };

  const handleGoToSecurity = () => {
    setCurrentPage('security');
  };

  const handleGoToVideo = () => {
    setCurrentPage('video');
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'welcome' && <WelcomePage onStart={handleStart} />}
      {currentPage === 'name' && <NamePage onSubmit={handleNameSubmit} />}
      {currentPage === 'coupon' && (
        <CouponPage
          userName={userName}
          totalValue={totalValue}
          currentCoupon={currentCoupon}
          coupon={coupons[currentCoupon - 1]}
          onNext={handleNextCoupon}
        />
      )}
      {currentPage === 'limit' && (
        <LimitPage
          userName={userName}
          totalValue={totalValue}
          onContinue={handleGoToWithdraw}
        />
      )}
      {currentPage === 'withdraw' && (
        <WithdrawPage totalValue={totalValue} onSubmit={handleGoToSecurity} />
      )}
      {currentPage === 'security' && (
        <SecurityPage totalValue={totalValue} onContinue={handleGoToVideo} />
      )}
      {currentPage === 'video' && (
        <VideoPage totalValue={totalValue} />
      )}
    </div>
  );
}

export default App;
