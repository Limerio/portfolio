resource "cloudflare_record" "www" {
  zone_id = var.cloudflare_zone_id
  name    = "www"
  value   = "limerio.dev"
  type    = "CNAME"
  proxied = true
}

resource "cloudflare_record" "limerio_dev" {
  zone_id = var.cloudflare_zone_id
  name    = "limerio.dev"
  value   = "portfolio-cff.pages.dev"
  type    = "CNAME"
  proxied = true
}
