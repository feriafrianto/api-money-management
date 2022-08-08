module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '63c0673825b8bfe95a926da8a35e6f06'),
  },
});
