module ApplicationHelper
  def navigation_links(label = 'nav', active_class = 'active')
    pages = @cms_site.pages.published

    if label
      pages = pages.includes(:categories).where({ comfy_cms_categories: { label: label } })
    end

    content_tag :ul do
      pages.each do |page|
        is_active = request.original_fullpath == page.full_path
        content = content_tag :li, class: is_active ? active_class : nil do
          link_to_unless is_active, page.label, page.full_path
        end

        # content_tag doesn't handle arrays well, so create processed strings
        concat content
      end
    end
  end
end
