import Redis from 'ioredis';

const redisURL = process.env.REDIS_URL as string

if(!redisURL){
    throw new Error('REDIS_URL is not defined')
}

const redis = new Redis(redisURL);
redis.on('connect', ()=>{
    console.log('Redis: client connected')
})

redis.on('error', (err) => {
    console.error('Redis connection error:', err)
})

export default redis

/**
 * 设置键值对
 * @param {string} key - 键名
 * @param {string} value - 键值
 * await redis.set('my_key', 'my_value');
 */

/**
 * 获取键值
 * const value = await redis.get('my_key');
 */

/**
 * 删除键
 * await redis.del('my_key');
 */

/**
 * 检查键是否存在
 * @returns {Promise<number>} - 1 表示键存在，0 表示键不存在
 * const exists = await redis.exists('my_key');
 */


/**
 * 设置键的过期时间
 * @param {number} seconds - 过期时间，单位为秒
 * await redis.set(key, value, 'EX', expireTime); or await redis.expire('my_key', 3600);
 */

/**
 * 获取键的剩余过期时间
 * @returns {Promise<number>} - 剩余过期时间，单位为秒
 * const ttl = await redis.ttl('my_key');
 */


/**
 * 增加键的数值
 * @returns {Promise<number>} - 增加后的键值
 * await redis.incr('counter');
 */


/**
 * 减少键的数值
 * @returns {Promise<number>} - 减少后的键值
 * await redis.decr('counter');
 */


/**
 * 向列表右端添加元素
 * @param {...string} values - 要添加到列表中的值
 * await redis.rpush('my_list', 'value1', 'value2');
 */

/**
 * 从列表右端弹出元素
 * @param {string} key - 列表的键名
 * const value = await redis.rpop('my_list');
 */


/**
 * 向集合添加元素
 * await redis.sadd('my_set', 'value1', 'value2');
 */


/**
 * 获取集合中的所有元素
 * const members = await redis.smembers('my_set');
 */


/**
 * 检查元素是否在集合中
 * @returns {Promise<number>} - 1 表示元素在集合中，0 表示元素不在集合中
 * const isMember = await redis.sismember('my_set', 'value1');
 */


/**
 * 设置哈希字段的值
 * @param {string} key - 哈希的键名
 * @param {string} field - 哈希字段
 * @param {string} value - 哈希字段的值
 * await redis.hset('my_hash', 'field1', 'value1');
 */


/**
 * 获取哈希字段的值
 * @returns {Promise<string | null>} - 哈希字段的值
 * const value = await redis.hget('my_hash', 'field1');
 */


/**
 * 发布消息到频道
 * @param {string} channel - 频道名
 * @param {string} message - 要发布的消息
 * await redis.publish('my_channel', 'Hello, World!');
 */


/**
 * 订阅频道并监听消息
 * @param {string} channel - 频道名
 * @param {function} callback - 监听回调函数
 * redis.subscribe('my_channel');
 * redis.on('message', (channel, message) => {
 * if (channel === 'my_channel') {
 *   console.log(message);  // 接收到 'my_channel' 频道的消息
 *  }
   });
*/
