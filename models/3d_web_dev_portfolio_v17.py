from odoo import models, fields

class WebDevPortfolio(models.Model):
    _name = '3d.web.dev.portfolio.v17'
    _description = '3D Web Developer Portfolio Theme'

    name = fields.Char('Project Name')
    description = fields.Text('Project Description')
    category = fields.Selection([
        ('webgl', 'WebGL'),
        ('threejs', 'Three.js'),
        ('babylonjs', 'Babylon.js'),
        ('other', 'Other')
    ], string='Category')
    image = fields.Binary('Project Image', attachment=True)
    project_url = fields.Char('Project URL')