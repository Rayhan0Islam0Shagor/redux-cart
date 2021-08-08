import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sentCartData } from './store/actions/cartActions';

// import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notifications = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sentCartData(cart));
    }

    // const sendCartData = async () => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: 'pending',
    //     title: 'sending...',
    //     message: 'sending cart data!',
    //   })
    // );
    // const response = await fetch(
    //   'https://react-http-45-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
    //   {
    //     method: 'PUT',
    //     body: JSON.stringify(cart),
    //   }
    // );
    // if (!response.ok) {
    //   throw new Error('sending cart data failed!');
    // }
    // dispatch(
    //   uiActions.showNotification({
    //     status: 'success',
    //     title: 'successful',
    //     message: 'cart data sent!',
    //   })
    // );
    // };
    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }
    // sendCartData().catch((error) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: 'error',
    //       title: 'ERROR',
    //       message: 'sending error!',
    //     })
    //   );
    // });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notifications && (
        <Notification
          status={notifications.status}
          title={notifications.title}
          message={notifications.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
