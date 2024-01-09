from odoo import http
from odoo.http import request

class WebDevPortfolioController(http.Controller):

    @http.route(['/page/home'], type='http', auth='public', website=True)
    def page_home(self, **kw):
        return request.render('3DWebDevPortfolio_v17.template_home_page', {})

    @http.route(['/page/projects'], type='http', auth='public', website=True)
    def page_projects(self, **kw):
        projects = request.env['3d.web.dev.portfolio.project'].search([])
        return request.render('3DWebDevPortfolio_v17.template_projects_page', {'projects': projects})

    @http.route(['/page/about'], type='http', auth='public', website=True)
    def page_about(self, **kw):
        return request.render('3DWebDevPortfolio_v17.template_about_page', {})

    @http.route(['/page/contact'], type='http', auth='public', website=True)
    def page_contact(self, **kw):
        return request.render('3DWebDevPortfolio_v17.template_contact_page', {})

    @http.route(['/submit/contact'], type='http', auth='public', methods=['POST'], website=True)
    def submit_contact_form(self, **post):
        # Here you would handle the contact form submission and possibly send an email
        # For now, we'll just redirect to the contact page with a thank you message
        return request.redirect('/page/contact?success=1')