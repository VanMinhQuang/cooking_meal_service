"use strict";
/**
 * Tài liệu Swagger cho các endpoint liên quan đến meal
 * File này sẽ được đọc bởi swagger-jsdoc
 */
/**
 * @swagger
 * tags:
 *   name: Meals
 *   description: API quản lý thực đơn
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Meal:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID tự sinh của món ăn
 *         name:
 *           type: string
 *           description: Tên món ăn
 *         description:
 *           type: string
 *           description: Mô tả món ăn
 *         price:
 *           type: number
 *           description: Giá món ăn
 *         category:
 *           type: string
 *           description: Danh mục món ăn
 *         image:
 *           type: string
 *           description: URL hình ảnh món ăn
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Ngày tạo
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Ngày cập nhật
 *     MealInput:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         name:
 *           type: string
 *           description: Tên món ăn
 *         description:
 *           type: string
 *           description: Mô tả món ăn
 *         price:
 *           type: number
 *           description: Giá món ăn
 *         category:
 *           type: string
 *           description: Danh mục món ăn
 *         image:
 *           type: string
 *           description: URL hình ảnh món ăn
 */
/**
 * @swagger
 * /meal:
 *   get:
 *     summary: Lấy danh sách tất cả món ăn
 *     tags: [Meals]
 *     responses:
 *       200:
 *         description: Danh sách các món ăn
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Meal'
 *   post:
 *     summary: Tạo món ăn mới
 *     tags: [Meals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MealInput'
 *     responses:
 *       201:
 *         description: Tạo món ăn thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Meal'
 *       400:
 *         description: Dữ liệu không hợp lệ
 */
/**
 * @swagger
 * /meal/{id}:
 *   get:
 *     summary: Lấy món ăn theo ID
 *     tags: [Meals]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của món ăn
 *     responses:
 *       200:
 *         description: Chi tiết món ăn
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Meal'
 *       404:
 *         description: Không tìm thấy món ăn
 */ 
//# sourceMappingURL=swaggerDocs.js.map