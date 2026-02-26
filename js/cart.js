var _cx = [];
var _cL = [];

function _initCart() {
    var _s = localStorage.getItem('_cx_data');
    if (_s) {
        try {
            _cx = JSON.parse(_s);
        } catch (e) {
            _cx = [];
        }
    }
}
_initCart();

function addToCart(pId) {
    var _p = _0xPROD.find(function (x) { return x.id === pId });
    if (!_p) return;

    var existingItem = _cx.find(function (item) { return item.id === pId });

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        var _e = {
            id: _p.id,
            n: _p.n,
            p: _p.p,
            sp: _p.sp,
            img: _p.img,
            qty: 1
        };
        _cx.push(_e);
    }

    _saveCart();
    _renderCart();
    _updateBadge();
    _showToast(_p.n + ' added to cart!');
}

function removeFromCart(index) {
    if (index >= 0 && index < _cx.length) {
        _cx.splice(index, 1); 
        _saveCart();
        _renderCart();
        _updateBadge(); 
    }
}

function updateQty(idx, delta) {
    if (idx >= 0 && idx < _cx.length) {
        _cx[idx].qty += delta;
        
        if (_cx[idx].qty <= 0) {
            removeFromCart(idx); 
        } else {
            _saveCart();
            _renderCart();
            _updateBadge();
        }
    }
}

function _calcTotal() {
    var total = 0; 
    for (var i = 0; i < _cx.length; i++) {
        var item = _cx[i];
        var price = item.sp ? parseFloat(item.sp) : parseFloat(item.p);
        total += price * item.qty;
    }
    return total.toFixed(2);
}

function _calcItemCount() {
    var count = 0;
    for (var i = 0; i < _cx.length; i++) {
        count += _cx[i].qty;
    }
    return count;
}

function _updateBadge() {
    var _b = document.querySelector('.cart-badge');
    if (_b) {
        var count = _calcItemCount();
        _b.textContent = count;
        _b.style.display = count > 0 ? 'flex' : 'none';
    }
}

function _saveCart() {
    localStorage.setItem('_cx_data', JSON.stringify(_cx));
}

function _renderCart() {
    var _cEl = document.getElementById('cart-items');
    var _tEl = document.getElementById('cart-total-value');
    if (!_cEl || !_tEl) return;

    var _h = '';
    for (var i = 0; i < _cx.length; i++) {
        var _it = _cx[i];
        var displayPrice = _it.sp ? _it.sp : _it.p;
        
        _h += '<div class="cart-item">';
        _h +=   '<img src="' + _it.img + '" alt="product" class="cart-item-img">';
        _h +=   '<div class="cart-item-info">';
        _h +=       '<h4 class="cart-item-name">' + _it.n + '</h4>';
        _h +=       '<span class="cart-item-price">$' + displayPrice + '</span>';
        _h +=       '<div class="cart-item-qty">';
        _h +=           '<button class="qty-btn" onclick="updateQty(' + i + ',-1)">−</button>';
        _h +=           '<span class="qty-val">' + _it.qty + '</span>';
        _h +=           '<button class="qty-btn" onclick="updateQty(' + i + ',1)">+</button>';
        _h +=       '</div>';
        _h +=   '</div>';
        _h +=   '<button class="cart-remove-btn" onclick="removeFromCart(' + i + ')">×</button>';
        _h += '</div>';
    }

    _cEl.innerHTML = _h || '<p style="text-align:center; color:var(--text-muted); margin-top:20px;">Your cart is empty</p>';
    _tEl.textContent = '$' + _calcTotal();
}

function toggleCart() {
    var _s = document.getElementById('cart-sidebar');
    var _o = document.getElementById('cart-overlay');
    if (_s && _o) {
        _s.classList.toggle('open');
        _o.classList.toggle('visible');
    }
}

function _showToast(msg) {
    var _t = document.createElement('div');
    _t.className = 'toast-notification';
    _t.textContent = msg;
    document.body.appendChild(_t);
    setTimeout(function () { _t.classList.add('show') }, 10);
    setTimeout(function () {
        _t.classList.remove('show');
        setTimeout(function () { _t.remove() }, 300);
    }, 2500);
}