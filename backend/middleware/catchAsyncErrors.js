module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};

// Mã trên định nghĩa một middleware wrapper đơn giản được sử dụng để bắt và xử lý các lỗi trong hàm không đồng bộ (async).
// Nó nhận một hàm không đồng bộ làm tham số (theFunc) và trả về một middleware.

// Middleware này sẽ thực thi hàm không đồng bộ (theFunc) được truyền vào với các tham số req, res, và next.
// Bên trong hàm, theFunc được bọc trong một Promise.resolve() để đảm bảo rằng kết quả của hàm sẽ là một promise.

// Nếu promise được trả về từ theFunc được giải quyết thành công, middleware sẽ gọi next() để chuyển yêu cầu đến middleware tiếp theo.

// Nếu promise được trả về từ theFunc bị từ chối (rejected), middleware sẽ chuyển lỗi (error) cho middleware xử lý lỗi tiếp theo bằng
// cách gọi next(error). Điều này cho phép middleware xử lý lỗi tiếp theo có thể nắm bắt và xử lý lỗi đó.

// Đây là một cách thuận tiện để bắt lỗi trong các hàm không đồng bộ và chuyển chúng cho middleware xử lý lỗi, 
// giúp tách riêng logic xử lý lỗi và logic chính của middleware.