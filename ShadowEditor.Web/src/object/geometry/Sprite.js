/**
 * 精灵
 * @param {THREE.SpriteMaterial} material 材质
 */
function Sprite(material = new THREE.SpriteMaterial()) {
    THREE.Sprite.call(this, material);

    this.name = _t('Sprite');
}

Sprite.prototype = Object.create(THREE.Sprite.prototype);
Sprite.prototype.constructor = Sprite;

export default Sprite;